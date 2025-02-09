import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { grpc } from './Api';
import { AppState } from './AppState';
import { YourDevices } from './pages/YourDevices';
import { AllDevices } from './pages/admin/AllDevices';

export const App = observer(class App extends React.Component {
  async componentDidMount() {
    AppState.info = await grpc.server.info({});
  }

  render() {
    if (!AppState.info) {
      return <p>loading...</p>;
    }
    return (
      <Router>
        <CssBaseline />
        <Navigation />
        <Box component="div" m={2}>
          <Routes>
            <Route path="/" element={<YourDevices />} />
            {AppState.info.isAdmin && (
              <>
                <Route path="/admin/all-devices" element={<AllDevices />} />
              </>
            )}
          </Routes>
        </Box>
      </Router>
    );
  }
});
