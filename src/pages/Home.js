import React, { useEffect, useMemo, useState } from 'react';
import { PageLayout } from 'layouts';
import axios from 'services/axios';
import { PAGE_SIZE } from 'utility/constants';
import { CountryCard, Loader } from 'components';
import Pagination from 'components/Pagination';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);

      try {
        const cachedData = localStorage.getItem('countries');

        if (cachedData) {
          setCountries(JSON.parse(cachedData));
          return;
        }

        const { data } = await axios.get('/all');
        setCountries(data);
        localStorage.setItem('countries', JSON.stringify(data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const countryData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return countries.slice(firstPageIndex, lastPageIndex);
  }, [countries, currentPage]);

  return (
    <PageLayout className="home">
      {loading && <Loader />}

      <section className="section pb-0">
        <div className="container">
          <h3 className="text-center">Select a country flag to see details</h3>
        </div>
      </section>

      <section className="section pb-0">
        <div className="container">
          <div className="card-wrapper">
            {countryData.map((item, i) => (
              <CountryCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={countries.length}
            pageSize={PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
