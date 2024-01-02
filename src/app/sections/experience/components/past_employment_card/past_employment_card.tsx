import React from 'react';

interface PastEmploymentCardProps {
  jobTitle: string,
  company: string,
  startYear: string,
  endYear: string,
  location: string,
  body: string,
}

function PastEmploymentCard(
  props: PastEmploymentCardProps,
) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
      {/* Company logo */}
      <div>
        <div className="border-daintree border-opacity-10 border-2 rounded-full w-fit">
          <div className="h-10 w-10 rounded-full bg-aths-special"/>
        </div>
      </div>

      <div>
        {/* Text */}
        <div className="space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="space-y-1">
            <p className="text-cutty-sark font-medium">{`${props.jobTitle} @ ${props.company}`}</p>
            <div className="flex flex-row justify-between text-cutty-sark text-sm">
              <p>{`${props.startYear} - ${props.endYear}`}</p>
              <p>{props.location}</p>
            </div>
          </div>

          {/* Body */}
          <div>
            <p className="text-cutty-sark text-sm font-light">
              This is where the body text will go, but at the moment there is no body text to be seen, so what I&apos;ll
              do is
              write a generic and long body text that can be seen on the site but actually needs to be provided by all
              the
              consumers of this component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEmploymentCard;