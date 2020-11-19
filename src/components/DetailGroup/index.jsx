import React from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/icon.svg';
import headerGrup from '../../assets/headergrup.png';
import headerIMG from '../../assets/profileIMG.jpg';

function DetailGroup() {
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
								<div className="d-flex flex-row justify-content-between">
									<h3 className="mt-4 font-weight-bold">Banking Social App</h3>
									<button className="btn btn-createGroup mt-4">
										Tambah Topik
									</button>
								</div>
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-12">
												<h4 class="card-title">UI/UX</h4>
												<div className="row">
													<div className="col-6">
														Merancang Tampilan Desain Dashboard
													</div>
													<div className="col-3 text-right">Asignee : Hadi</div>
													<div className="col-3 text-right">
														<span class="badge badge-success">Done</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">
														Merancang Tampilan Desain Profile
													</div>
													<div className="col-3 text-right">Asignee : Hadi</div>
													<div className="col-3 text-right">
														<span class="badge badge-primary">In Progress</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">
														Merancang Tampilan Desain Profile
													</div>
													<div className="col-3 text-right">Asignee : Hadi</div>
													<hr />
													<div className="col-3 text-right">
														<span class="badge badge-primary">In Progress</span>
													</div>
												</div>

												<button className="btn btn-createGroup mt-4">
													Tambah Task
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-12">
												<h4 class="card-title">Frontend</h4>
												<div className="row">
													<div className="col-6">Halaman Dashboard</div>
													<div className="col-3 text-right">Asignee : Bima</div>
													<div className="col-3 text-right">
														<span class="badge badge-primary">In Progress</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">Halaman Profile</div>
													<div className="col-3 text-right">Asignee : Bima</div>
													<div className="col-3 text-right">
														<span class="badge badge-primary">In Progress</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">Halaman Artikel</div>
													<div className="col-3 text-right">Asignee : Bima</div>
													<div className="col-3 text-right">
														<span class="badge badge-success">Done</span>
													</div>
													<hr />
												</div>

												<button className="btn btn-createGroup mt-4">
													Tambah Task
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-12">
												<h4 class="card-title">Backend</h4>
												<div className="row">
													<div className="col-6">API Registrasi</div>
													<div className="col-3 text-right">
														Asignee : Anton
													</div>
													<div className="col-3 text-right">
														<span class="badge badge-success">Done</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">API Profile</div>
													<div className="col-3 text-right">
														Asignee : Anton
													</div>
													<div className="col-3 text-right">
														<span class="badge badge-primary">In Progress</span>
													</div>
												</div>
												<hr />
												<div className="row">
													<div className="col-6">API Artikel</div>
													<div className="col-3 text-right">
														Asignee : Anton
													</div>
													<div className="col-3 text-right">
														<span class="badge badge-secondary">To Do</span>
													</div>
													<hr />
												</div>

												<button className="btn btn-createGroup mt-4">
													Tambah Task
												</button>
											</div>
										</div>
									</div>
								</div>
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
								<div class="card w-100 my-4">
									<div className="card-body">
										<h3 className="card-title text-center">Tentang Group</h3>
										<div className="d-flex flex-column text-center">
											<p>
												Merupakan Grup Project Banking Social App, yang dibuat
												dalam Rangka Meningkatkan Kepedulian Para Penggiat Bank
												dalam Hubungan sosial Bermasyarakat
											</p>
										</div>
									</div>
								</div>
								<div class="card w-100 pb-5">
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
