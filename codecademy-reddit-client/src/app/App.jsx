import Header from '../features/Header';
import PostsList from '../features/PostsList';
import SubredditList from '../features/SubredditList';

export default function App() {
  return (
    <>
      <Header />
      <section className='container relative top-48 mx-auto mb-20 flex flex-col-reverse gap-8 md:flex-row lg:gap-14'>
        <PostsList />
        <SubredditList />
      </section>
    </>
  );
}
