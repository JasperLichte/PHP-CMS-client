import React, {useEffect, useState} from 'react';
import RequestFactory from "./util/api/RequestFactory";
import {useDispatch, useSelector} from "react-redux";
import ActionType from "./actions/ActionType";
import {errorSelector, settingsSelector} from "./selectors/selectors";
import SettingsApplyer from "./components/settings/SettingsApplyer";
import MarkdownPage from "./components/page/MarkdownPage";
import ApiResponse from "./util/api/ApiResponse";
import PreflightResponse from "./util/api/responses/PreflightResponse";
import ErrorType, {errorTypeByHttpStatusCode} from "./util/errors/ErrorType";
import Error from "./components/error/Error";

export default function App() {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const error = useSelector(errorSelector);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    RequestFactory.preflight('123').then(handlePreflightResponse(dispatch));
  }, [dispatch]);

  useEffect(() => {
    if (settings != null) {
      setLoading(false);
    }
  }, [settings]);

  if (error != null) {
    return <Error errorType={error} />;
  }

  if (loading) {
    return <></>;
  }

  return (<>
    {settings != null && <SettingsApplyer settings={settings} />}
    <MarkdownPage slug="start"/>
  </>);
}

function handlePreflightResponse(dispatch: Function) {
  return (res: ApiResponse<PreflightResponse>) => {
    if (res.status === 200) {
      dispatch({
        type: ActionType.SET_SETTINGS,
        settings: res.data.settings
      });
    } else {
      dispatch({
        type: ActionType.SET_ERROR,
        error: (res.status === 401 ? ErrorType.INVALID_LICENSE : errorTypeByHttpStatusCode(res.status))
      });
    }
  }
}
