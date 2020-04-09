import React, {useEffect, useState} from 'react';
import RequestFactory from "./util/api/RequestFactory";
import {useDispatch, useSelector} from "react-redux";
import ActionType from "./actions/ActionType";
import {settingsSelector} from "./selectors/selectors";
import SettingsApplyer from "./components/settings/SettingsApplyer";
import MarkdownPage from "./components/page/MarkdownPage";

function App() {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    RequestFactory.preflight('123').then((res) => {
      if (res.status === 200) {
        dispatch({
          type: ActionType.SET_SETTINGS,
          settings: res.data.settings
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (settings != null) {
      setLoading(false);
    }
  }, [settings]);

  return (<>
    {loading
      ? 'Loading...'
      : <>
          {settings != null && <SettingsApplyer settings={settings} />}
          <MarkdownPage slug="start"/>
        </>
    }
  </>);
}

export default App;
