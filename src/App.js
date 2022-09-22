import Dashboard from './componets/dashboard/Dashboard'
import './App.css';

function App() {

  let requests = ["accounts", "assets", "customers", "datapoints", "devices", "documents", "forms", "invites", "media", "messages", "namespaces", "orders", "patients", "relationships", "rules", "templates", "users", "workflows"]
  
  return (
    <div className="App">
      <h1 className='app-title'>Status Dashboard</h1>
      <Dashboard requests={requests} />
    </div>
  );
}

export default App;
