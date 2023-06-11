import Header from '../features/Header';
import PostsList from '../features/PostsList';
import SubredditList from '../features/SubredditList';

export default function App() {
  return (
    <>
      <Header />
      <section className='container relative top-32 mx-auto flex h-max flex-col-reverse gap-8 px-4 py-20 sm:px-0 md:flex-row lg:gap-14'>
        <PostsList />
        <SubredditList />
      </section>
    </>
  );
}
