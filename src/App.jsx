import "./App.css";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Contactlist from "./Contactlist";
import { useState } from "react";
import { useRef } from "react";

const primary = css`
  background-colour: green;
  color: black;
`;

function Header({ onSearch }) {
  const searchElementRef = useRef(null);
  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchElementRef.current.value);
  }
  return (
    <header
      css={css`
        border-bottom: 1px solid;
        padding: 16px;
      `}
    >
      <form
        action=""
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 8px;
        `}
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          type="text"
          placeholder="Search Contacts"
        />
        <button>Search</button>
      </form>
    </header>
  );
}

export function SideNav() {
  const [searchText, setsearchText] = useState("");

  function onSearch(text) {
    setsearchText(text);
  }
  return (
    <aside
      css={css`
        padding: 16px;
        border-right: 1px solid;
        display: grid;
        grid-template-rows: auto 1fr auto;
        overflow: auto;
      `}
    >
      <Header onSearch={onSearch}></Header>
      <section
        css={css`
          padding: 16px;
          overflow: auto;
        `}
      >
        <Contactlist searchText={searchText}></Contactlist>
      </section>
      <footer>Footer</footer>
    </aside>
  );
}

function Contents() {
  return (
    <section>
      <Outlet></Outlet>
    </section>
  );
}

export function LayOut() {
  return (
    <>
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 100%;
        `}
      >
        <SideNav></SideNav>
        <Contents></Contents>
      </main>
    </>
  );
}

export default LayOut;
