import Image from "next/image";
import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  // console.log(countries);
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword) || country.subregion.toLowerCase().includes(keyword));

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>총 {countries.length}개 나라 </div>

        <div className={styles.input}>
          <SearchInput placeholder="국가명, 지역 또는 하위 지역으로 필터링 (Filter by Name, Region or SubRegion)" onChange={onInputChange} />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    }, // will be passed to the page component as props
  };
};
