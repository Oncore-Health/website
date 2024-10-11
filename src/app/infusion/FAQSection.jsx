"use client"; // Add this at the top of your component file for client-side rendering

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

// FAQ Data Array
const faqs = [
  {
    question: 'How much improvement can a center expect when starting with Oncare?',
    answer:
      'Health Systems can expect to see up to a 15% increase in chair time utilization while using the Oncare platform, 25% of their charge nurse’s time saved along with a significant decrease in patient wait times and a reduction in nursing overtime.',
  },
  {
    question: 'What protections and security has Oncare put in place to handle our data?',
    answer: (
      <>
        Oncare has instituted a robust set of security protocols, policies, and procedures that follow the NIST framework. Our platform is fully HIPAA-compliant and we have partnered with the Secureframe compliance platform to actively monitor all the controls we have put in place. For more details, visit our <a href="https://trust.useoncare.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Security Center</a>.
      </>
    ),
  },
  {
    question: 'What training does Oncare offer for providers and support staff?',
    answer: (
      <>
        Oncare has developed a robust set of resources to support training of infusion center teams (including charge nurses, bedside nurses, schedulers, and other members of the care team).
        <ol className="list-decimal ml-6 mt-4 space-y-3">
          <li>
            <span className="font-semibold">Oncare University</span>, which is a Coursera-like platform with short videos to walk through each aspect of the platform and how Oncare can help augment each key workflow.
          </li>
          <li>
            We have built <span className="font-semibold">interactive demos</span> to help each user walk through the platform to build more familiarity with key use cases.
          </li>
          <li>
            Before go-live, we host <span className="font-semibold">lunch-and-learns</span> to answer pending questions, walk through examples, and distribute tip sheets to paste to workstations with shortcuts & handy instructions.
          </li>
          <li>
            Finally, the Oncare team hosts frequent office hours to support users well beyond the roll-out process.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: 'What ongoing support does Oncare offer health systems?',
    answer:
      'Oncare will be your committed partner and offers live support along with a dedicated portal for submitting tickets & feedback. We ensure your system stays up-to-date with regular software updates.',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#F4F1FF] py-12 pb-16 px-8"> {/* Added padding inside the section */}
  <div className="container mx-auto max-w-4xl px-6"> {/* You can adjust padding here as well */}
    <h2 className="text-4xl font-bold text-center mb-8">FAQ</h2>
    <div className="space-y-6 divide-y divide-gray-300">
      {faqs.map((faq) => (
        <Disclosure key={faq.question} as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex justify-between w-full text-left font-semibold">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex items-center">
                    <PlusSmallIcon className={`${open ? 'hidden' : 'block'} h-6 w-6`} aria-hidden="true" />
                    <MinusSmallIcon className={`${open ? 'block' : 'hidden'} h-6 w-6`} aria-hidden="true" />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
</section>

  );
}
