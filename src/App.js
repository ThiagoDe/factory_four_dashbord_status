import Dashboard from './componets/dashboard/Dashboard'
import './App.css';

function App() {

  const requests = ["accounts", "assets", "customers", "datapoints", "devices", "documents", "forms", "invites", "media", "messages", "namespaces", "orders", "patients", "relationships", "rules", "templates", "users", "workflows"]
  
  return (
    <div className="App">
      <h1 className='app-title'>Status Dashboard - FactoryFour APIs</h1>
      <Dashboard requests={requests} />
    </div>
  );
}

export default App;
