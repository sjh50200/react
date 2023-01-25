import './App.css';
import styled from 'styled-components';

export const GoogleButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  #g_id_siginin {
    width: 100px;
  }
`;

function App() {
  return (
    <div className="App">
      <GoogleButtonContainer>
        <div
          id="g_id_onload"
          data-client_id={process.env.REACT_APP_GSI_ID}
          data-callback="handleCredentialResponse"
        ></div>
        <div class="g_id_signin" data-type="standard"></div>
        hi
      </GoogleButtonContainer>
    </div>
  );
}

export default App;
