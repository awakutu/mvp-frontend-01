import http from "../http-common";

/*Api User*/
//Mendapatkan Foto Profil
const getImage = () => {
  return http.get("/image");
};

//Mengirim Foto Profil
const postImage = () => {
  return http.post("/image");
};

//Menghapus Foto Profil
const deleteImage = () => {
  return http.delete("/image");
};

// Register User
const postRegister = (Username,email,password) => {
  return http.post("/register", {Username,email,password});
};

// Login User
const postLogin = (name,password) => {
  return http.post("/login", {name,password});
};

// Edit profile user berdasarkan id
const putUser = (id) => {
  return http.put(`/user/${id}`);
};

// Dapatkan profile user berdasarkan id
const getUser = (id) => {
  return http.get(`/user/{id}`);
};

// Untuk membuat token login
const postToken = () => {
  return http.post("/token");
};

// Untuk mendapatkan api token login dan cek validasi token
const getToken = (idtoken) => {
  return http.get(`/token?${idtoken}`);
};

// Untuk logout dan menghapus tokens
const postLogout = () => {
  return http.post("/user/logout");
};

// Untuk mendapatkan kategori
const getKategori = () => {
  return http.get("/kategori");
};

/*Api Admin*/

// Login
const getAdminLogin = () => {
  return http.get("/admin/login");
};

// Menampilkan seluruh user
const getAdminUsers = () => {
  return http.get("/admin/user");
};

// Meng-edit user
const postAdminEdit = (id) => {
  return http.get(`/admin/user/${id}`);
};

export default {
  getImage,
  postImage,
  deleteImage,
  postRegister,
  postLogin,
  putUser,
  getUser,
  postToken,
  getToken,
  postLogout,
  getKategori,
  getAdminLogin,
  getAdminUsers,
  postAdminEdit,
};
