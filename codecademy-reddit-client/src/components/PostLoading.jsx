export default function PostLoading() {
  return (
    <div className='card card-side border border-neutral bg-base-100 shadow-lg'>
      <div className='card-body animate-pulse gap-4'>
        <h2 className='h-8 w-80 rounded-lg bg-neutral'></h2>
        <p className='h-4 w-64 rounded-lg bg-neutral'></p>
        <p className='h-2 w-52 rounded-lg bg-neutral'></p>
        <div className='card-actions w-full justify-end'>
          <div className='h-2 w-20 rounded-lg bg-neutral'></div>
        </div>
      </div>
    </div>
  );
}
