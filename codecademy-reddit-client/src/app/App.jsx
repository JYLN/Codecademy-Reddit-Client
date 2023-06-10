import SubredditList from '../components/SubredditList';
import Header from '../features/Header';
import PostsList from '../features/PostsList';

export default function App() {
  return (
    <>
      <Header />
      <section className='container relative top-44 mx-auto grid grid-cols-7'>
        <div className='col-span-5'></div>
        <SubredditList />
      </section>
    </>
  );
}
