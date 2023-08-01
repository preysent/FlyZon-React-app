import React from 'react'
import AdminNavbar from './AdminNavbar'
import ProductManagement from './productM/ProductManagement'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import UserManagement from './userM/UserManagement';
import OrderManagement from './orderM/OrderManagement';
import Dashboard from './dashboard/Dashboard';


const Admin = () => {

  // use to match the previous path | uri
  const match = useRouteMatch()
  console.log(`${match.path}/userManagement`)

  return (
    <>

      <div className="bg-gray-100">

        <div className="flex h-screen sm:flex-row flex-col">

          <AdminNavbar />
          {/* Main Content  */}
          <main className="sm:w-4/5 w-full p-4 overflow-y-auto">
            <Switch>

              <Route exact path={`${match.path}/productManagement`} >
                <ProductManagement />
              </Route>

              <Route exact path={`${match.path}/userManagement`} >
                <UserManagement />
              </Route>

              <Route exact path={`${match.path}/orderManagement`} >
                <OrderManagement />
              </Route>

              <Route exact path={`${match.path}/`} >
                <Dashboard />
              </Route>

            </Switch>
          </main>
        </div>

      </div>

    </>
  )
}

export default Admin
