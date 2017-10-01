import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import UserListElement from "./UserListElement";
import UserDelete from "./UserDelete";

// User list component
export class UserList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_modal: {
          show: false,
          user:{}
      }
    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);

  }

  // render
  render() {
    // pagination
    const {users, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(users.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of users
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <UserListElement key={index} user={user}/>
              );
            }
          })}
          </tbody>
        </Table>

        <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

        <UserDelete/>
      </div>
    );
  }

  // change the user lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

}

// export the connected class
function mapStateToProps(state) {
    return {
        users: state.users,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
    };
}
export default connect(mapStateToProps)(UserList);
