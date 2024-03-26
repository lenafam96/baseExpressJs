const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express(); //app express
const port = process.env.PORT;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public")));

// config router
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/test", (req, res) => res.render("sample.ejs"));

app.get("/api/endpoint", (req, res) => res.sen(JSON.stringify([{id: 'fovwae5mxlivt'}])));

app.get("/tk-smas-vnedu", (req, res) =>
  res.send(
    JSON.stringify([
      {
        name: "Chọn trường...",
        u_smas: "",
        p_smas: "",
        u_vnedu: "",
        p_vnedu: "",
        url_truong: "",
        so_diem_mieng: 5,
        so_diem_15phut: 5,
        so_diem_1tiet: 6,
      },
      {
        name: "Cuối Hạ",
        u_smas: "hbh_kibc_cuoiha",
        p_smas: "Thcscuoiha@2025",
        u_vnedu: "hbh_kibc_cuoiha",
        p_vnedu: "Thcscuoiha@2025",
        url_truong: "https://musnusuumnsgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 5,
        so_diem_15phut: 5,
        so_diem_1tiet: 6,
      },
      {
        name: "Trung Bì",
        u_smas: "hbh_kibc_trungbi",
        p_smas: "Giangvu@1975",
        u_vnedu: "hbh_kibc_trungbi",
        p_vnedu: "Giangvu@1975",
        url_truong: "https://musnueoscasgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 5,
        so_diem_15phut: 5,
        so_diem_1tiet: 6,
      },
      // {
      //   name: "Vĩnh Tiến",
      //   u_smas: "hbh_kibc_vinhtien",
      //   p_smas: "KB1234vt@",
      //   u_vnedu: "congminh.hbh",
      //   p_vnedu: "Vnpt@4321",
      //   url_truong: "https://namoseaocsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 5,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Kim Bình",
      //   u_smas: "hbh_kibc_kimbinh",
      //   p_smas: "Kimbinh@123",
      //   u_vnedu: "kimbinh2021",
      //   p_vnedu: "hc7kpvtj",
      //   url_truong: "https://eucuuenvczsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 4,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Nam Thượng",
      //   u_smas: "hbh_kibc_namthuong",
      //   p_smas: "THCSNamThuong@123",
      //   u_vnedu: "congminh.hbh",
      //   p_vnedu: "Vnpt@4321",
      //   url_truong: "https://musnvnsuvzsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 3,
      //   so_diem_15phut: 4,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Thung Rếch",
      //   u_smas: "hbh_kibd_thungrech",
      //   p_smas: "Rech2023@",
      //   u_vnedu: "adminthungrech_kbi",
      //   p_vnedu: "x6ttkgxn",
      //   url_truong: "https://namcccoaessgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 3,
      //   so_diem_15phut: 4,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Đông Bắc",
      //   u_smas: "hbh_kibc_dongbac",
      //   p_smas: "Dongbac2024@#",
      //   u_vnedu: "dongbackb",
      //   p_vnedu: "cb8gjmr7",
      //   url_truong: "https://musnoosuaesgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 3,
      //   so_diem_15phut: 3,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Vĩnh Đồng",
      //   u_smas: "hbh_kibc_vinhdong",
      //   p_smas: "Qlnt2021@VĐVMTC",
      //   u_vnedu: "congminh.hbh",
      //   p_vnedu: "Vnpt@4321",
      //   url_truong: "https://vnmonnszzsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 4,
      //   so_diem_15phut: 4,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Kim Sơn",
      //   u_smas: "hbh_kibc_kimson",
      //   p_smas: "Thcskimson*1920",
      //   u_vnedu: "congminh.hbh",
      //   p_vnedu: "Vnpt@4321",
      //   url_truong: "https://musnveeeeasgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 3,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Hạ Bì",
      //   u_smas: "hbh_kibc_habi",
      //   p_smas: "habi2014",
      //   u_vnedu: "thcshabikb",
      //   p_vnedu: "chrvhz4c",
      //   url_truong: "https://ozzeesmunsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 5,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Bình Sơn",
      //   u_smas: "hbh_kibc_binhson",
      //   p_smas: "Binhson@2024",
      //   u_vnedu: "hbh_kibc_binhson",
      //   p_vnedu: "rrpgqgfn",
      //   url_truong: "https://eucuovmaeasgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 5,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      // {
      //   name: "Sơn Thuỷ",
      //   u_smas: "hbh_kibc_sonthuy",
      //   p_smas: "KimBoi2022@",
      //   u_vnedu: "congminh.hbh",
      //   p_vnedu: "Vnpt@4321",
      //   url_truong: "https://musnovemszsgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 3,
      //   so_diem_15phut: 3,
      //   so_diem_1tiet: 7,
      // },
      // {
      //   name: "Đồng Tiến",
      //   u_smas: "hbh_thpc_dongtien",
      //   p_smas: "B3l6qm2U",
      //   u_vnedu: "thcsdongtien_hb",
      //   p_vnedu: "83qgq9nv",
      //   url_truong: "https://uamszvsvssgdhoabinh.vnedu.vn/v3",
      //   so_diem_mieng: 5,
      //   so_diem_15phut: 5,
      //   so_diem_1tiet: 6,
      // },
      {
        name: "Hợp Kim",
        u_smas: "hbh_kibc_hopkim",
        p_smas: "Hopkim@1234",
        u_vnedu: "hopkimkb",
        p_vnedu: "qt5p4kzn",
        url_truong: "https://musnvavzzzsgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 5,
        so_diem_15phut: 5,
        so_diem_1tiet: 7,
      },
      {
        name: "Lập Chiệng",
        u_smas: "hbh_kibc_lapchieng",
        p_smas: "THCSLapChieng@123",
        u_vnedu: "lapchiengkb",
        p_vnedu: "p4zgkpqc",
        url_truong: " https://musnvmuoeesgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 3,
        so_diem_15phut: 3,
        so_diem_1tiet: 6,
      },
      {
        name: "Thị trấn Bo",
        u_smas: "hbh_kibc_thitran",
        p_smas: "Kimboi2020@",
        u_vnedu: "hbh_kibc_thitran",
        p_vnedu: "g6cbq7mv",
        url_truong: "https://nceaavccncsgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 3,
        so_diem_15phut: 5,
        so_diem_1tiet: 6,
      },
      {
        name: "DTNT Tỉnh",
        u_smas: "hbh_thpt_dantocnoitru",
        p_smas: "Dtnttinh@2025",
        u_vnedu: "admin_dantocnoitrutinh",
        p_vnedu: "nzgvtrx3",
        url_truong: "https://uauuzvmausgdhoabinh.vnedu.vn/v3",
        so_diem_mieng: 2,
        so_diem_15phut: 5,
        so_diem_1tiet: 5,
      },
    ])
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
