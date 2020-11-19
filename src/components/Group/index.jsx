import React from 'react';
import { removeUserSession } from '../../utils/Common';
import { useHistory } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/icon.svg';
import Info from '../../assets/info.svg';
import headerIMG from '../../assets/profileIMG.jpg';

function Group() {
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
									<h3 className="mt-4">List Group</h3>
									<button className="btn btn-createGroup mt-4">
										Create Group
									</button>
								</div>
							</div>
							<div className="col-sm-6">
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-10">
												<h4 class="card-title">
													<a href="/DetailGroup">Banking Social App</a>
												</h4>
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
											</div>
										</div>
									</div>
								</div>
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-10">
												<h4 class="card-title">
													<a href="/DetailGroup">Banking Social App</a>
												</h4>
												<div class="d-flex">
													<div>Jumlah Anggota :</div>
													<div class="text-left">15 Orang</div>
												</div>
												<p class="card-text">Deskripsi Group :</p>
												<div className="card-text">
													<p>
														Merupakan Grup Project Banking Social App, yang
														dibuat dalam Rangka Meningkatkan Kepedulian Para
														Penggiat Bank dalam Hubungan sosial Bermasyarakat
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-10">
												<h4 class="card-title">
													<a href="/DetailGroup">Banking Social App</a>
												</h4>
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
											</div>
										</div>
									</div>
								</div>

								<div class="card w-100 my-2 mt-4">
									<div class="card-body">
										<div className="row">
											<div className="col-10">
												<h4 class="card-title">
													<a href="/DetailGroup">Banking Social App</a>
												</h4>
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
