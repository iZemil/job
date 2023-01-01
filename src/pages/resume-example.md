# Resume Example

```jsx live noInline
const name = 'John Doe';
const title = 'Front-End Developer';
const description =
	'Highly skilled and experienced frontend developer with a strong background at working effectively in both individual and team settings, and able to mentor junior developers. Seeking a challenging and rewarding frontend developer role where I can use my skills and experience to make a positive impact.';
const stack = [
	'typescript',
	'reactjs',
	'redux-toolkit',
	'scss/styled-components',
	'CSS-grids',
	'graphql',
	'jest',
	'enzyme',
];
const career = [
	{
		title: 'Senior Front-End Developer',
		team: 'GitHub',
		from: new Date('Oct 2020'),
		to: new Date(),
		achievements: [
			'led development team of 5 to create GitHub pages, allowing customer repositories to be hosted directly',
			'created a new documentation for UI library that prevented the need for a 3-week onboarding course',
			'mentored 4 juniour frontend developers on team in expanding ReactJS skillset',
			'worked with PM to keep on track with the project plan, timeline, and billing',
		],
		stack: ['typescript', 'react', 'github pages', 'graphql'],
	},
	{
		title: 'Middle Frontend Developer',
		team: 'IBM Team',
		from: new Date('Aug 2015'),
		to: new Date('Sep 2020'),
		achievements: [
			'participated in the initial wave of developers learning and implementing the ReactJS library',
			'rewrote HTML to meet industry and company standards for SEO and Accessibility',
			'tested, debugged, and shipped 10s of 1000s of lines of code to various development teams',
			'led javascript technical interviews',
		],
		stack: ['html/css', 'react', 'redux'],
	},
];
const contacts = ['San Francisco CA', 'linkedin: https://www.linkedin.com/in/john-doe', 'email: john-doe@gmail.com'];
const hobbies = ['🦄 developing my own projects', '🥋 brazilian jiu-jitsu', '🍳 cooking'];

const ID = 'resume';

const ResumeExample = () => (
	<div id={ID}>
		<img src="https://via.placeholder.com/200" alt="author" />

		<h1>
			{title}
			<br />
			{name}
		</h1>
		<p>{description}</p>

		<h2>Stack</h2>
		<p>{stack.join(', ')}</p>

		<h2>Experience</h2>
		{career.map(({ title, team, from, to, achievements, stack }) => (
			<div key={team}>
				<h3>
					{team} •{' '}
					<small>
						{format(from)} - {format(to)} ({getDuration(from, to)})
					</small>
				</h3>
				<h4>{title}</h4>
				<ul>{[achievements.map((it) => <li key={it}>{it}</li>)]}</ul>
				<ul className="skills">{renderListItems(stack, 'skill')}</ul>
			</div>
		))}

		<h2>Hobbies</h2>
		<ul>{renderListItems(hobbies)}</ul>

		<h2>Contacts</h2>
		<ul>{renderListItems(contacts)}</ul>

		<button className="button button--secondary download" onClick={handleDownload}>
			PDF
		</button>
	</div>
);

function renderListItems(data, className) {
	return data.map((it) => (
		<li key={it} className={className}>
			{it}
		</li>
	));
}
function format(date) {
	return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}
function getDuration(from, to) {
	let months = monthDiff(from, to);
	const years = Math.trunc(months / 12);
	months = months - years * 12;

	const yearsDuration = `${years ? `${years} y` : ''}`;
	const monthsDuration = `${months ? ` ${months} m` : ''}`;

	return `${yearsDuration}${monthsDuration}`;
}
function monthDiff(from, to) {
	return to.getMonth() - from.getMonth() + 12 * (to.getFullYear() - from.getFullYear());
}
function handleDownload() {
	window.print();
}

const Styles = () => (
	<style>
		{`
            #${ID} {
                position: relative;
            }

            .skills {
                padding: 10px 0px;
                display: flex;
                gap: 5px;
                flex-wrap: wrap;
            }

            .skill {
                display: block;
                padding: 5px 10px;
                border: 1px solid lightgrey;
                border-radius: 50px;
                font-size: 12px;
            }

            .download {
                position: absolute;
                top: 0;
                right: 0;
            }

            @media only print {
                body * {
                    visibility: hidden;
                }

                #${ID}, #${ID} * {
                    visibility: visible;
                }

                #${ID} {
                    position: fixed;
                    left: 0;
                    top: 0;
                }

                .download {
                    display: none;
                }
            }
            `}
	</style>
);

render(
	<>
		<Styles />
		<ResumeExample />
	</>
);
```
