import React from 'react';
import { Link } from '../Components/Link/Link';
import { FAQ } from './FAQ';

export const mainSection = (
	<>
		<p>
			Clowder House Foundation, Inc. provides lifetime care for your cat
			or cats when you are no longer able to do so. We offer a tranquil
			setting with plenty of cat toys, furniture and sunny windows for
			your cat’s enjoyment. Music, human love and companionship will be a
			part of your cat’s everyday life.
		</p>
		<p>
			We are a no-kill, minimum-cage facility, and we make every effort to
			accommodate your cat's special needs. We recognize each cat's
			individuality and strive to make all our residents comfortable.
			Cages are used only for new residents until they become acclimated,
			or for sick or injured cats.
		</p>
		<p>
			Clowder House also provides homes for abused, neglected and
			un-adoptable cats as space and funds allow. Rescued cats that can be
			socialized are available for adoption.
		</p>
		<p>
			We provide many visitation opportunities for continued contact
			between you and your cat.
		</p>
	</>
);

export const volunteerSection = (
	<>
		<p>
			We have approximately 300 cats in our care, and providing these cats
			with their daily needs requires a large volunteer base. Clowder
			House provides all on-site training and lots of loving cats!
		</p>
		<p>We are looking for caring volunteers who:</p>
		<ul>
			<li>Are age 16 or older</li>
			<li>Can provide own transportation to and from our facility</li>
			<li>
				Are available one or multiple 3-4 hour shift, day or evening,
				any day of the week
			</li>
			<li>
				Are seeking to fulfill high school or college required community
				hours
			</li>
			<li>
				Can participate in job-sponsored volunteer programs (check with
				employer)
			</li>
		</ul>
	</>
);

export const catAdmittanceSection = (
	<>
		<p>
			Clowder House accepts new residents with a minimum placement fee.
			Fees include all food, vet care, necessary medicine, etc. and range
			from $1,000 to $3,000 per cat. On average, it’s estimated that a cat
			owner spends about $7,000-$10,000 to care for a cat during its life
			(estimated lifespan 15 years
			<i>Wisconsin Humane Society website</i>)
		</p>
		<p>
			Please contact us with any questions you may have about placing a
			cat.
		</p>
		<p>
			While we are not set up for short-term care, if you have already
			made arrangements for future lifetime care, we can assist you with
			boarding in emergency situations. Once a residential application is
			made, you will be provided with all necessary papers and “call tags”
			for your home.
		</p>
		<p>
			Foundation funds may be available for special needs and multiple cat
			situations. We would be delighted to work with you or your legal
			advisor on planning options.
		</p>
	</>
);

export const adoptSection = (
	<>
		Have a little room at your house for a loving, four-legged friend? Since
		Clowder House provides homes for abused and neglected cats as space and
		funds allow, rescued cats that can be socialized are available for
		adoption. We have lots of cats and kittens who need homes. Please
		contact us
	</>
);

export const faqSection = (
	<>
		<FAQ
			title="What is Clowder House?"
			body="Clowder House is St. Louis’ first and only sanctuary for domestic
			felines. We provide lifetime care for your cat or cats when you are
			no longer able to do so."
		/>
		<FAQ
			title="How many cats live at your facility?"
			body="Our average is about 300 cats, but it can fluctuate depending on the season."
		/>
		<FAQ
			title="Are the cats caged?"
			body="No. Most of our cats roam freely in one of our large rooms equipped with anything and everything a cat could dream of. Cats that are caged have either just joined us and are being observed or have health conditions that are dangerous to other cats."
		/>
		<FAQ
			title="I just found a stray cat. Can I drop it off?"
			body="Unfortunately, we are not able to take drop offs. Clowder House does provide homes for abused, neglected and un-adoptable cats as space and funds allow on a case-by-case basis only. Please contact us with any questions you may have."
		/>
		<FAQ
			title="If I place a cat at your facility, when can I see them?"
			body="If you have placed a cat in our care, we encourage you to visit whenever you can. You can come anytime during visiting hours. Otherwise, please contact us to schedule an appointment."
		/>
		<FAQ
			title="What are the procedures once a cat arrives?"
			body="Once a cat has been placed with us, the cat is isolated from our other cats for 10 days so we can complete a health assessment with our vet and observe their behavior. Most often, the cat is then released into general population in one of our large free-roam rooms."
		/>
		<FAQ
			title="What are the benefits of volunteering?"
			body="Besides seeing those smiling kitty faces each time, volunteers who complete more than 500 hours are eligible for reduced adoption fees and endowment benefits for their own cats."
		/>
		<FAQ
			title="How are the cats cared for?"
			body="Each day, a group of volunteers replenishes food and water, administers necessary medication, and cleans litter boxes and floors among other things. We also have volunteers who just come to play with the cats and brush or groom them."
		/>
		<FAQ
			title="How often does the vet visit?"
			body="The vets we work with generally come to visit our cats, administer shots, and complete health assessments monthly. We also transport our residents to vet clinics as needed."
		/>
		<FAQ
			title="Who is the vet at Clowder House?"
			body=" While we do not have an on-staff vet, we do partner with vets from practices in St. Louis City and County to oversee the care of our cats."
		/>
		<FAQ
			title="Why isn’t there someone there to answer my phone call?"
			body="Our facility is staffed by volunteers only, whose schedules change constantly. Please contact us and leave a message and we will return your call as soon as possible."
		/>
		<FAQ
			title="Are you a non-profit organization?"
			body="We are a 501c3 organization. If you need further information regarding our status, please contact us."
		/>
	</>
);

export const contactCardSection = (
	<>
		<p>
			Clowder House is open to visitors 2 - 4PM on the 1st Sunday of each
			month, excluding holidays
		</p>
		<address>
			Clowder House Foundation, Inc.
			<br /> 3134 Wyoming Street <br />
			St. Louis, MO 63118
		</address>
		<p>
			Phone:
			<Link text="314-776-PURR (7877)" link="tel:314-776-7877" />
			<br />
			Email:
			<Link
				text="clowderhouse@juno.com"
				link="mailto:clowderhouse@juno.com"
			/>
		</p>
	</>
);

export const donationCardSection = (
	<>
		<p>
			The generous donations of cat lovers enable us to provide these
			valuable services. With increased support, we will be able to expand
			the scope of services we offer.
		</p>
		<Link text="Donate" link="" />
	</>
);

export const volunteerCardSection = (
	<>
		<p>
			Unlike most animal shelters, Clowder House is a volunteer-only
			organization. We take pride in the fact that all money raised and
			donated goes directly towards the care of our cats and upkeep of our
			facility.
		</p>
		<Link text="Learn How You Can Help" link="#volunteer" />
	</>
);
