import * as React from 'react';
import dayjs from 'dayjs';
import { FaFacebook } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCalendar } from 'react-icons/fc';
import { IoTicketOutline } from 'react-icons/io5';
import Image from 'gatsby-plugin-sanity-image';

export const FacebookEvent = ({
  value: { title, url, guests, eventDate, eventImage, ticketUrl },
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit flex-col self-center rounded bg-slate-200 p-5 text-inherit text-slate-600 no-underline shadow-sm hover:text-inherit hover:text-slate-800 hover:shadow-lg md:max-w-xl md:flex-row md:gap-5 md:p-4 md:shadow-md"
    >
      <Image
        {...eventImage}
        alt="something"
        width={1000}
        className="mb-3 h-full w-full rounded object-cover md:m-0 md:w-56"
      />
      <div className="flex flex-col gap-2">
        {title}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FcCalendar className="h-6 w-6" />
          {dayjs(eventDate).format('YYYY-MM-DD HH:mm')}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <BsFillPeopleFill className="h-3 w-3 text-slate-400" />
            {guests} guests
          </div>
          <button
            onClick={() => window.open(ticketUrl, '_blank')}
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-lg border bg-amber-600 px-2 py-1 text-sm font-normal text-slate-100 no-underline transition-transform hover:scale-105 hover:transform hover:text-slate-100 hover:shadow md:flex"
          >
            <IoTicketOutline className="h-4 w-4" />
            tickets
          </button>
          <FaFacebook className="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </a>
  );
};
