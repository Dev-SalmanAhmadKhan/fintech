import { Button, Drawer, Image, Menu } from "antd";
import { useState } from "react";
import { MenuItems } from "../../content/Content";
import logo from "./../../../assets/logos/logo.png";
import "./styles-module.scss";
import { Link } from "react-router-dom";

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
  const [current, setCurrent] = useState('1');
  const handelClick = (key) => {
    setCurrent(key);
    console.log(current);
  };
  return (
    <>
      <div className="container">
        <Menu
          mode={isInline ? "inline" : "horizontal"}
          style={{ border: 0 }}
        >
          <div className="logo">
            <Image src={logo} preview={false} />
          </div>
          <div className="menu-sec">
          {MenuItems.map((data) => (
              <>
                  <Menu.Item key = {data.key}    >
                    <Link to={data.link} className = {current == data.key ? "active" : ''}  onClick = { () => handelClick(data.key)}  >
                      {data.name}
                    </Link>
                  </Menu.Item>
              </>
            ))}
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
