import React, { useState } from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from 'react-router-dom';

import './style.css';
import { Table, Modal, Button, Form, Tab, Tabs } from 'react-bootstrap';
import Logo from '../../assets/icon.svg';
import headerGrup from '../../assets/headergrup.png';
import headerIMG from '../../assets/profileIMG.jpg';

function DetailGroup() {
	const history = useHistory();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleLogout = () => {
		removeUserSession();
		history.push('/Login');
	};

	return (
		<>
			<header className="container-fluid card">
				<div className="row">
					<span className="mx-4" />
					<img src={Logo} alt="Logo" />
					<div className="form-group has-search pt-4 pl-4 w-50 mx-4">
						<span className="fa fa-search form-control-feedback" />
						<input
							type="text"
							className="form-control pl-5"
							placeholder="Search Articles and Collaboration"
						/>
					</div>
					<button className="btn btn-createGroup mx-4 my-4">
						Create Group
					</button>

					<div className="dropdown">
						<img className="img-dashboard mt-2" src={headerIMG} />
						<div className="dropdown-content">
							<a href="/Profile">Profile</a>
							<a href="/Login" onClick={handleLogout} value="Login">
								Logout
							</a>
						</div>
					</div>
				</div>
			</header>
			<main className="container-fluid">
				<div className="row main-wrap ">
					<nav className="col-md-3 d-none d-md-block sidebar">
						<div className="sidebar-sticky">
							<ul className="nav flex-column">
								<li className="nav-item">
									<a className="nav-link active" href="/Dashboard">
										<i className="fa fa-dashboard pt-4" aria-hidden="true"></i>{' '}
										Dashboard <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Group">
										<i className="fa fa-group pt-4" aria-hidden="true"></i>{' '}
										Group
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Dashboard">
										<i className="fa fa-file pt-4" aria-hidden="true"></i>{' '}
										Portofolio
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Dashboard">
										<i className="fa fa-star pt-4" aria-hidden="true"></i>{' '}
										Innovation Showcase
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="col-sm-9">
						<div className="row">
							<div className="col-12">
								<div className="d-flex flex-row justify-content-between">
									<img className="w-100" src={headerGrup} />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-9">
								<h3 className="mt-4 font-weight-bold">Banking Social App</h3>
								<Tabs
									defaultActiveKey="task"
									transition={false}
									id="noanim-tab-example"
									className="mt-4 "
								>
									<Tab eventKey="task" title="Task">
										<div className="col-12 mt-4">
											<Table Responsive>
												<thead>
													<tr>
														<th>Task Name</th>
														<th>Assignee</th>
														<th>Progress</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Merancang Tampilan Desain Dashboard</td>
														<td>Hadi</td>
														<td>
															<span class="badge badge-primary">In Progress</span>
														</td>
													</tr>
												</tbody>
											</Table>

											{/* <div className="row">
												<div className="col-6">
													Merancang Tampilan Desain Dashboard
												</div>
												<div className="col-3 text-right">Assignee : Hadi</div>
												<div className="col-3 text-right">
													<span class="badge badge-success">Done</span>
												</div>
											</div> */}
										</div>
										<div className="col-12 text-right">
										<Button
											className="btn-createGroup"
											variant="primary"
											onClick={handleShow}
										>
											Add Task
										</Button>

										<Modal show={show} onHide={handleClose}>
											<Modal.Header closeButton>
												<Modal.Title>Add New Task</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<Form>
													<Form.Group controlId="formGroupName">
														<Form.Label className="font-weight-bold">Title Task</Form.Label>
														<Form.Control
															type="text"
															placeholder="Type your Task Title"
														/>
													</Form.Group>
													<Form.Group controlId="formGroupName">
														<Form.Label className="font-weight-bold">Assignee</Form.Label>
														<Form.Control
															type="text"
															placeholder="Type the Assignee of the Task"
														/>
													</Form.Group>
													<Form.Group controlId="formGroupName">
														<Form.Label className="font-weight-bold">Progress</Form.Label>
														<Form.Control as="select" defaultValue="Choose...">
															<option>To Do</option>
															<option>In Progress</option>
															<option>Done</option>
														</Form.Control>
													</Form.Group>

													<Form.Group controlId="formGroupDesc">
														<Form.Label className="font-weight-bold">Task Description</Form.Label>
														<Form.Control
															as="textarea"
															rows={3}
															placeholder="Write your Task Description"
														/>
													</Form.Group>
												</Form>
												
												<Button
													className="btn-createGroup"
													variant="primary"
													type="submit"
													onClick={handleClose}
												>
													Save
												</Button>
											</Modal.Body>
											{/* <Modal.Footer className="D-flex justify-content-start">
										
										</Modal.Footer> */}
										</Modal>
										</div>
									</Tab>
									<Tab eventKey="member" title="Member">
										<div className="col-12 mt-4">
											<Table Responsive>
												<thead>
													<tr>
														
														<th>Name</th>
														<th>Username</th>
														<th>Role</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Nur Hadi</td>
														<td>nurhadi</td>
														<td>
															Admin
														</td>
													</tr>
												</tbody>
											</Table>
										</div>
									</Tab>
									<Tab eventKey="desc" title="Description">
										<div className="col-12 mt-4">
											Merupakan Grup Project Banking Social App, yang dibuat
											dalam Rangka Meningkatkan Kepedulian Para Penggiat Bank
											dalam Hubungan sosial Bermasyarakat
										</div>
									</Tab>
								</Tabs>
							</div>

							<div className="col-3">
								<div class="card w-100 my-4">
									<div className="card-body">
										<h3 className="card-title text-center">Group Activity</h3>
										<div className="text-center pt-3">
											<p>Admin menambahkan Task baru di UI/UX</p>
											<hr />
											<p>Admin menambahkan Task baru di Backend</p>
											<hr />
											<p>Admin menambahkan Task baru di Frontend</p>
										</div>
									</div>
								</div>

								<div class="card w-100 pb-5 my-4">
									<div className="card-body">
										<h3 className="card-title text-center">Invite Member</h3>
										<div className="d-flex flex-column text-center">
											<div className="form-group has-search pt-4 pl-1 w-100">
												<span className="fa fa-search form-control-feedback" />
												<input
													type="text"
													className="form-control pl-5"
													placeholder="Search Member"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-9"></div>
						</div>
					</div>
				</div>
			</main>
			<div></div>
		</>
	);
}

export default DetailGroup;
