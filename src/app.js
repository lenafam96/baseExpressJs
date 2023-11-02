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

app.get("/tk-smas-vnedu", (req, res) =>
  res.send(
    JSON.stringify([
      {
        name: "Vĩnh Tiến",
        u_smas: "hbh_kibc_vinhtien",
        p_smas: "KB1234vt@",
        u_vnedu: "thcsvinhtienbkb",
        p_vnedu: "Hb123456@",
        url_truong: "https://namoseaocsgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Kim Bình",
        u_smas: "hbh_kibc_kimbinh",
        p_smas: "Kimbinh_2023",
        u_vnedu: "kimbinh2021",
        p_vnedu: "fprbjjgb",
        url_truong: "https://eucuuenvczsgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Nam Thượng",
        u_smas: "hbh_kibc_namthuong",
        p_smas: "THCSNamThuong@123",
        u_vnedu: "namthuongkb",
        p_vnedu: "5ngbpm9r",
        url_truong: "https://musnvnsuvzsgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Thung Rếch",
        u_smas: "hbh_kibd_thungrech",
        p_smas: "Rech2023@",
        u_vnedu: "adminthungrech_kbi",
        p_vnedu: "fb49v38p",
        url_truong: "https://namcccoaessgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Đông Bắc",
        u_smas: "hbh_kibc_dongbac",
        p_smas: "Dongbac2024@#",
        u_vnedu: "dongbackb",
        p_vnedu: "25vkrcjc",
        url_truong: "https://musnoosuaesgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Vĩnh Đồng",
        u_smas: "hbh_kibc_vinhdong",
        p_smas: "Qlnt2021@VĐVMTC",
        u_vnedu: "ththcsvinhdong_kb",
        p_vnedu: "jzv2rmt9",
        url_truong: "https://vnmonnszzsgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Kim Sơn",
        u_smas: "hbh_kibc_kimson",
        p_smas: "Thcskimson*1920",
        u_vnedu: "kimsonkb",
        p_vnedu: "9rpp8fcg",
        url_truong: "https://musnveeeeasgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Hạ Bì",
        u_smas: "hbh_kibc_habi",
        p_smas: "habi2014",
        u_vnedu: "thcshabikb",
        p_vnedu: "f5rk8njx",
        url_truong: "https://ozzeesmunsgdhoabinh.vnedu.vn/v3",
      },
      {
        name: "Đồng Tiến",
        u_smas: "hbh_thpc_dongtien",
        p_smas: "B3l6qm2U",
        u_vnedu: "thcsdongtien_hb",
        p_vnedu: "Hb123456@",
        url_truong: "https://uamszvsvssgdhoabinh.vnedu.vn/v3",
      },
    ])
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
