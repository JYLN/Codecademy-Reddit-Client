import Header from '../features/Header';
import PostsList from '../features/PostsList';
import SubredditList from '../features/SubredditList';

export default function App() {
  return (
    <>
      <Header />
      <section className='container relative top-48 mx-auto grid grid-cols-1 gap-16 px-8 md:top-40 md:grid-cols-5 md:px-0 xl:grid-cols-7 xl:gap-20'>
        <div className='md:col-span-3 xl:col-span-5'>
          <PostsList />
        </div>
        <SubredditList />
      </section>
    </>
  );
}
