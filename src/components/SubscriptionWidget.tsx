import * as React from 'react';
import type { FormEvent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { toast } from 'react-toastify';

const SubscriptionWidget = () => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const name = event.currentTarget.firstName.value;

    setLoading(true);
    fetch('/api/subscribers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    })
      .then(async (response) => {
        if (response.status !== 200 && response.status !== 201) {
          return toast.error('Valami rosszul sült el. Kérlek próbáld újra!');
        }

        toast.success('🤟 Sikeres feliratkozás!');
        // @ts-expect-error it should work
        event.target.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error('Valami rosszul sült el. Kérlek próbáld újra!');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-8 @lg:rounded-lg @lg:p-4">
      <div className="mb-4 flex flex-col items-center gap-4 @lg:flex-row">
        <div className="mt-0 w-48 shrink-0 rounded-full border-4 border-slate-200 @lg:-mt-14 @lg:border-8 @lg:border-white">
          <StaticImage
            src="../assets/images/ftm-hug.jpg"
            alt="Feed The Mogul logo"
            style={{ borderRadius: '50%', width: '100%' }}
            imgStyle={{ borderRadius: '50%' }}
          />
        </div>
        <div className="flex max-w-md flex-col">
          <h2 className="mb-3 text-center text-2xl font-extrabold @lg:text-left">
            Megoldásunk #FOMO ellen!
          </h2>
          <div className="flex flex-col gap-2 text-slate-400">
            <p>
              <span className="fi fi-hu" /> Küldünk egy levelet, ha lesz
              koncertünk, vagy elkészül egy új videóklip, album. Semmi spam.
            </p>
            <p>
              <span className="fi fi-gb" /> We're gonna send an email when we
              have a gig or releasing a new music video or album. No spam.
            </p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 self-center @lg:flex-row @lg:gap-2"
      >
        <input
          type="name"
          name="firstName"
          placeholder="Neved / First name"
          disabled={loading}
          className="w-full rounded-lg border-2 border-gray-200 bg-slate-50 px-5 py-3 font-semibold placeholder:font-normal placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-400 @lg:w-64 @lg:px-4 @lg:py-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          disabled={loading}
          className="w-full rounded-lg border-2 border-gray-200 bg-slate-50 px-5 py-3 font-semibold placeholder:font-normal placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-400 @lg:w-64 @lg:px-4 @lg:py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-lg border-none bg-slate-900 px-5 py-3 font-medium text-pink-200 transition-colors hover:bg-slate-700 disabled:bg-slate-100 disabled:text-slate-400 @lg:w-36 @lg:px-4 @lg:py-2"
        >
          {loading ? 'Küldés...' : 'Feliratkozás'}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionWidget;
