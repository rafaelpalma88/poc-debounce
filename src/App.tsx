import { useRef, useState } from 'react';
import { debounce } from 'lodash';

// https://www.freecodecamp.org/portuguese/news/como-usar-o-debounce-e-o-throttle-em-react-e-como-abstrai-los-em-hooks/

export default function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

  const debounceSave = useRef( debounce(nextValue => { saveToDb(nextValue) }, 1000))
    .current;

	const handleChange = ( event: any ) => {

    // const { value: nextValue } = event.target;
    const nextValue = event.target.value
    setValue(nextValue);
    debounceSave(nextValue);

	};

	return (
		<main>
			<h1>Blog</h1>
			<textarea value={value} onChange={handleChange} rows={5} cols={50} />
			<section className="panels">
				<div>
					<h2>Editor (Client)</h2>
					{value}
				</div>
				<div>
					<h2>Saved (DB)</h2>
					{dbValue}
				</div>
			</section>
		</main>
	);
}