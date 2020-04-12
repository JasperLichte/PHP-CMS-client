import React, {useEffect, useState} from 'react';
import RequestFactory from "../../util/api/RequestFactory";
import {useDispatch, useSelector} from "react-redux";
import ActionType from "../../actions/ActionType";
import {errorSelector, settingsSelector} from "../../selectors/selectors";
import SettingsApplyer from "../settings/SettingsApplyer";
import ApiResponse from "../../util/api/ApiResponse";
import PreflightResponse from "../../util/api/responses/PreflightResponse";
import ErrorType, {errorTypeByHttpStatusCode} from "../../util/errors/ErrorType";
import Error from "../error/Error";
import Api from "../../util/api/Api";
import Routes from "../routes/Routes";
import './App.scss';
import LoadingSpinner from "../placeholder/loading/LoadingSpinner";

interface IProps {
  license: string,
}

export default function App({license}: IProps) {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const error = useSelector(errorSelector);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (!license) {
      dispatch({
        type: ActionType.SET_ERROR,
        error: ErrorType.INVALID_LICENSE,
      });
      return;
    }
    RequestFactory.getConfig().then(res => {
      if (res.status !== 200) {
        dispatch({
          type: ActionType.SET_ERROR,
          error: errorTypeByHttpStatusCode(res.status)
        });
      } else {
        Api.baseUrl = res.data.baseApiUrl;
        RequestFactory.preflight(license).then(handlePreflightResponse(dispatch));
      }
    });
  }, [dispatch, license]);

  useEffect(() => {
    if (settings != null) {
      setLoading(false);
    }
  }, [settings]);

  if (error != null) {
    return <Error errorType={error} />;
  }

  return (<>
    {settings != null && <SettingsApplyer settings={settings} />}
    <LoadingSpinner color="#f00" loading={loading} />
    {!loading && <Routes/>}
  </>);
}

function handlePreflightResponse(dispatch: Function) {
  return (res: ApiResponse<PreflightResponse>) => {
    if (res.status === 200) {
      dispatch({
        type: ActionType.SET_SETTINGS,
        settings: res.data.settings
      });
      dispatch({
        type: ActionType.SET_USER,
        user: res.data.user
      });
    } else {
      dispatch({
        type: ActionType.SET_ERROR,
        error: (res.status === 401 ? ErrorType.INVALID_LICENSE : errorTypeByHttpStatusCode(res.status))
      });
    }
  }
}
