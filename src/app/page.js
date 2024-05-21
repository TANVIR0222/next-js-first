import Counter from '@/Components/Counter/Counter';
import Link from 'next/link';

const HomePage = () => {
  // throw new Error();

  return (
    <div>
      <h1 className="text-3xl"> Tanvir ! Hello</h1>
      <Counter/>
      <Link href="/about">
          <button className='btn btn-accent'>
            about
          </button>
      </Link>
      <Link href="/news">
          <button className='btn btn-accent'>
            news
          </button>
      </Link>
    </div>
  );
};

export default HomePage;