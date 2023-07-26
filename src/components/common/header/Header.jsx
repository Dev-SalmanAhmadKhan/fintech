import { Button, Drawer, Image, Menu } from "antd";
import { useState } from "react";
import logo from "./../../../assets/logos/logo.png";
import "./header.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <section>
        <div className="headerMenu">
          <HeaderNav />
        </div>

        <div
          className="menucollapsebtn"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <div className="logo">
            <Image src={logo} preview={false} />
          </div>
          <div className="text">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
          </div>{" "}
        </div>
        <Drawer
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          placement="left"
          closable={false}
          width={250}
        >
          <HeaderNav isInline />
        </Drawer>
      </section>
    </>
  );
};

const HeaderNav = ({ isInline = false }) => {
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log(e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="container">
        <Menu
          mode={isInline ? "inline" : "horizontal"}
          style={{ border: 0 }}
          onClick={onClick}
        >
          <div className="logo">
            <Image src={logo} preview={false} />
          </div>
          <div className="menu-sec">
            <Menu.Item id={current}>
              <a href="/" className="active">
                Home
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="/">About</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/">Contect</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/">Services</a>
            </Menu.Item>
          </div>
          <div className="btn-holder">
            <Button className="login-btn">Get A Quote</Button>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default Header;
