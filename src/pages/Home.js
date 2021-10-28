import React, { useMemo, useState } from 'react';
import { PageLayout } from 'layouts';
import { PAGE_SIZE } from 'utility/constants';
import { CountryCard, EmptyCard, Loader } from 'components';
import Pagination from 'components/Pagination';
import { capitalizeFirstLetter, greeting, isArrayEmpty, notify } from 'utility';
import Modal from 'components/Modal';
import { CountryDetails } from 'components/CountryDetails';
import { useAppContext } from 'contexts/AppContext';
import useBodyClass from 'services/useBodyClass';
import { Searchbar } from 'components/Searchbar';
import { useHistory } from 'react-router';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [noOverflow, setOverflow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const toggleOverflow = () => setOverflow((prevState) => !prevState);

  const toggleModal = (value) => {
    if (value) {
      setSelectedCountry(value);
    } else {
      setSelectedCountry();
    }

    toggleOverflow();

    setModalOpen((prevState) => !prevState);
  };

  const { countries, error, loading, onRefresh, url, onSetUrl } =
    useAppContext();

  if (error) {
    notify({
      type: 'error',
      message: capitalizeFirstLetter(error)
    });
  }

  const countryData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return countries && countries.slice(firstPageIndex, lastPageIndex);
  }, [countries, currentPage]);

  useBodyClass(noOverflow ? 'page--no-overflow' : 'page--default');

  return (
    <PageLayout className="home">
      {loading && <Loader />}

      {isArrayEmpty(countryData) && (
        <section className="section">
          <div className="container">
            <EmptyCard />
          </div>
        </section>
      )}

      {!isArrayEmpty(countryData) && (
        <>
          <section className="section pb-0">
            <div className="container">
              <h3 className="text-center">{greeting().text}</h3>

              <p className="text-center">
                Select a country flag to see details, or click{' '}
                <span
                  role="button"
                  className="refresh-link"
                  onClick={() => onRefresh()}
                >
                  <strong>
                    <em>here</em>
                  </strong>
                </span>{' '}
                to reload the data
              </p>

              <div className="searchbar-wrapper">
                <Searchbar
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                />

                {url.includes('name') && (
                  <button
                    className="clear-button"
                    onClick={() => {
                      onSetUrl('/all');
                      history.push('/');
                      setSearchValue('');
                    }}
                  >
                    Clear results
                  </button>
                )}
              </div>
            </div>
          </section>

          <section className="section pb-0">
            <div className="container">
              <div className="card-wrapper">
                {countryData.map((item, i) => (
                  <CountryCard
                    key={i}
                    item={item}
                    onClick={() => toggleModal(item)}
                  />
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
        </>
      )}

      {modalOpen && (
        <Modal isOpen={modalOpen} title="Country Details" onClose={toggleModal}>
          <CountryDetails item={selectedCountry} />
        </Modal>
      )}
    </PageLayout>
  );
};

export default Home;
