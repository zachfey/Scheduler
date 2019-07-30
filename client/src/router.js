export default
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <PrivateRoute exact path="/" component={Scheduler} authenticated={this.state.loggedIn} />
            <Route path="/login" render={(props) => <Login  {...props} logIn={this.logIn} />} />
        </Route>
        {/*this.state && this.state.checked &&
            <React.Fragment>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logOut={this.logOut}
                />
                {/* <SignUp/> */}
        {/* <Switch>
                    <PrivateRoute exact path="/" component={Scheduler} authenticated={this.state.loggedIn} />
                    <Route path="/login" render={(props) => <Login  {...props} logIn={this.logIn} />} />
                </Switch>
            </React.Fragment> */}
        {/* } */}
    </Router>