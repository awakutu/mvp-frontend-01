import React, { useState } from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import './style.css';
import Logo from '../../assets/icon.svg';
import headerIMG from '../../assets/profileIMG.jpg';

function Group() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const history = useHistory();
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
					<a href="/Profile">
						<img className="img-dashboard mt-2" src={headerIMG} />
					</a>
				</div>
			</header>
			<main className="container-fluid">
				<div className="row main-wrap ">
					<div className="col-sm-3 left-Bar sticky-top">
						<div className="d-flex">
							<i className="fa fa-braille pt-4" aria-hidden="true"></i>
							<a className="text-secondary" href="/Dashboard">
								<p className="pt-3 pl-2">Dashboard</p>
							</a>
						</div>
						<div className="d-flex">
							<i className="fa fa-suitcase pt-4" aria-hidden="true"></i>
							<a className="text-secondary" href="">
								<p className="pt-3 pl-2">Projects</p>
							</a>
						</div>
						<div className="d-flex">
							<i className="fa fa-users pt-4" aria-hidden="true"></i>
							<a className="text-secondary" href="/Group">
								<p className="pt-3 pl-2">Group</p>
							</a>
						</div>
						<div className="d-flex">
							<i className="fa fa-file pt-4" aria-hidden="true"></i>
							<a className="text-secondary" href="">
								<p className="pt-3 pl-2">Portfolio</p>
							</a>
						</div>
						<div className="d-flex">
							<i className="fa fa-star pt-4" aria-hidden="true"></i>
							<a className="text-secondary" href="">
								<p className="pt-3 pl-2">Innovation Showcase</p>
							</a>
						</div>
					</div>

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
											<Form>
												<Form.Group controlId="formGroupName">
													<Form.Label>Project Group Name</Form.Label>
													<Form.Control
														type="text"
														placeholder="Type the Group Name"
													/>
												</Form.Group>

												<Form.Group controlId="formGroupDesc">
													<Form.Label>Group Description</Form.Label>
													<Form.Control
														as="textarea"
														rows={3}
														placeholder="Write your Group Description"
													/>
												</Form.Group>
											</Form>
											<Button
												className="btn-createGroup"
												variant="primary"
												type="submit"
												onClick={handleClose}
											>
												Create Group
											</Button>
										</Modal.Body>
										{/* <Modal.Footer className="D-flex justify-content-start">
										
										</Modal.Footer> */}
									</Modal>
								</div>
							</div>

							<div className="col-sm-12">
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-10">
												<h4 class="card-title">Banking Social App</h4>
												<div class="d-flex">
													<div>Jumlah Anggota :</div>
													<div class="text-right">15 Orang</div>
												</div>
												<p class="card-text">Deskripsi Group :</p>
												<div className="card-text">
													<p>
														Merupakan Grup Project Banking Social App, yang
														dibuat dalam Rangka Meningkatkan Kepedulian Para
														Penggiat Bank dalam Hubungan sosial Bermasyarakat
													</p>
												</div>
												<button className="btn btn-createGroup">
													Lihat Grup
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div></div>
		</>
	);
}

export default Group;
