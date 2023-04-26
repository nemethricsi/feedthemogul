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
    <div className="flex flex-col gap-2 bg-white p-8 md:rounded-lg md:p-4">
      <div className="mb-4 flex flex-col items-center gap-4 md:flex-row">
        <div className="mt-0 w-48 flex-shrink-0 rounded-full border-8 border-white md:-mt-14">
          <StaticImage
            src="../assets/images/ftm-hug-pink.jpg"
            alt="Feed The Mogul logo"
            style={{ borderRadius: '50%', width: '100%' }}
            imgStyle={{ borderRadius: '50%' }}
          />
        </div>
        <div className="flex max-w-md flex-col text-center md:text-left">
          <h2 className="text-3xl">Ne maradj le!</h2>
          <p className="text-slate-400">
            Sajnos a social media platformokon manapság már nagyon nehéz elérni
            az embereket. Inkább saját tábort építünk, és küldünk üzenetet, ha
            lesz koncertünk, vagy elkészül egy új videóklip / album.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 self-center md:flex-row md:gap-2"
      >
        <input
          type="name"
          name="firstName"
          placeholder="Keresztneved"
          disabled={loading}
          className="w-full rounded-lg border-2 border-gray-200 bg-slate-50 px-5 py-3 font-semibold placeholder:font-normal placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-400 md:w-64 md:px-4 md:py-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail címed"
          disabled={loading}
          className="w-full rounded-lg border-2 border-gray-200 bg-slate-50 px-5 py-3 font-semibold placeholder:font-normal placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-400 md:w-64 md:px-4 md:py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-lg border-none bg-slate-900 px-5 py-3 font-medium text-pink-200 transition-colors hover:bg-slate-700 disabled:bg-slate-100 disabled:text-slate-400 md:w-36 md:px-4 md:py-2"
        >
          {loading ? 'Küldés...' : 'Feliratkozás'}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionWidget;
