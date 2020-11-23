import React, { useState, useEffect } from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getToken, getID, getUsername } from '../../utils/Common';
import './style.css';
import Logo from '../../assets/icon.svg';
import headerIMG from '../../assets/profileIMG.jpg';
import axios from 'axios';

function Group() {
	const [show, setShow] = useState(false);
	const [token, setToken] = useState(getToken());
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [mode, setMode] = useState('view');
	const [username, setUsername] = useState(getUsername());
	const [title, setTitle] = useState('');
	const [id_user, setId_user] = useState(+getID()); //menggunakan + utk mengubah tipe data string ke int
	const [deskripsi, setDeskripsi] = useState('');
	const [projects, setProjects] = useState([]);
	const history = useHistory();
	const handleLogout = () => {
		removeUserSession();
		history.push('/Login');
	};

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: `${token}`,
		},
	};

	useEffect(() => {
		axios
			.get('http://3.15.137.94:8084/api/project', config)
			.then((response) => setProjects(response.data.data.Data.reverse()));
	}, [projects]);

	function handleAdd(e) {
		e.preventDefault();
		axios.post(
			'http://3.15.137.94:8084/api/project',
			{ title, deskripsi, id_user, username },
			config
		);
		console.log('Berhasil Post');
		handleClose();
	}

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

					<div className="col-sm-8">
						<div className="row">
							<div className="col-12">
								<div className="d-flex flex-row justify-content-between">
									<h3 className="mt-4">Project Innovation Group</h3>

									<Button
										className="btn-createGroup mt-4"
										variant="primary"
										onClick={handleShow}
									>
										Create Group
									</Button>

									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>
												Create a Project Innovation Group
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<form onSubmit={handleAdd}>
												<Form.Group controlId="formGroupName">
													<Form.Label className="font-weight-bold">
														Project Group Name
													</Form.Label>
													<Form.Control
														type="title"
														value={title}
														onChange={(e) => setTitle(e.target.value)}
														placeholder="Type the Group Name"
													/>
												</Form.Group>

												<Form.Group controlId="formGroupDesc">
													<Form.Label className="font-weight-bold">
														Group Description
													</Form.Label>
													<Form.Control
														as="textarea"
														value={deskripsi}
														onChange={(e) => setDeskripsi(e.target.value)}
														type="deskripsi"
														rows={3}
														placeholder="Write your Group Description"
													/>
												</Form.Group>
												<Button className="btn-createGroup" type="submit">
													Create Group
												</Button>
											</form>
										</Modal.Body>
										{/* <Modal.Footer className="D-flex justify-content-start">
										
										</Modal.Footer> */}
									</Modal>
								</div>
							</div>

							{projects.map((project) => (
								<div className="col-sm-12">
									<div class="card w-100 my-2 mt-4" key={project.ID}>
										<div class="card-body">
											<div className="row">
												<div className="col-10">
													<h4 class="card-title">{project.title}</h4>
													<div class="d-flex">
														<div>Total Member : </div>
														<div class="text-right">{project.sum_anggota}</div>
													</div>
													<p class="card-text">Group Description :</p>
													<div className="card-text">
														<p>{project.deskripsi}</p>
													</div>
													<Link to="/DetailGroup">
														<a button className="btn btn-createGroup">
															Check Group
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
			<div></div>
		</>
	);
}

export default Group;
