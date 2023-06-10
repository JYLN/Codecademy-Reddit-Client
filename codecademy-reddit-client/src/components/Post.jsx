import { LoremIpsum } from 'lorem-ipsum';
import { BiCommentDetail, BiUpvote } from 'react-icons/bi';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 2,
  },
  wordsPerSentence: {
    max: 15,
    min: 5,
  },
});

export default function Post() {
  return (
    <div className='card card-side border border-neutral bg-base-100 shadow-lg'>
      <div className='card-body gap-4'>
        <h2 className='card-title'>Post Title</h2>
        <p>{lorem.generateParagraphs(2)}</p>
        <div className='card-actions items-center justify-between'>
          <div className='flex gap-2 font-jetbrains'>
            <div className='badge badge-outline badge-md'>
              <BiUpvote /> Upvotes
            </div>
            <div className='badge badge-outline badge-md'>
              <BiCommentDetail /> Comments
            </div>
          </div>
          <a className='btn-primary btn-outline btn-sm btn'>Read More</a>
        </div>
      </div>
    </div>
  );
}
