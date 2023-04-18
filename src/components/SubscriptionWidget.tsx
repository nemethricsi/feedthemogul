import * as React from 'react';
import type { FormEvent } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { toast } from 'react-toastify';

const FormWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  form {
    display: flex;
    gap: 8px;
    align-self: center;

    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }
  }

  input {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid gray;
    background-color: #fffffa;
    width: 250px;
    font-size: 16px;

    &::placeholder {
      font-weight: 400;
    }

    &:disabled {
      background-color: #f2f2f2;
      color: #ccc;
    }

    @media (max-width: 800px) {
      width: 100%;
      padding: 10px 20px;
    }
  }

  button[type='submit'] {
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    color: var(--white, white);
    background: var(--red);
    cursor: pointer;
    width: 150px;
    font-weight: 500;

    &:hover {
      background: red;
    }

    &:disabled {
      background: lightgray;
      color: #eee;
    }

    @media (max-width: 800px) {
      width: 100%;
      padding: 10px 20px;
    }
  }

  @media (max-width: 800px) {
    border-radius: 0;
    padding: 2rem;
  }
`;

const FormTextWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  .text-holder {
    display: flex;
    flex-direction: column;
    max-width: 440px;

    h2 {
      font-size: 28px;
    }

    p {
      color: darkgray;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    .text-holder {
      text-align: center;
    }
  }
`;

const SubscriptionImageWrapper = styled.div`
  width: 200px;
  margin-top: -50px;
  border: 10px solid white;
  flex-shrink: 0;
  border-radius: 50%;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

const SocialIcons = styled.div`
  padding: 20px;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

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
    <FormWrapper>
      <FormTextWrapper>
        <SubscriptionImageWrapper>
          <StaticImage
            src="../assets/images/ftm-hug.jpg"
            alt="Feed The Mogul logo"
            style={{ borderRadius: '50%', width: '100%' }}
            imgStyle={{ borderRadius: '50%' }}
          />
        </SubscriptionImageWrapper>
        <div className="text-holder">
          <h2>Ne maradj le!</h2>
          <p>
            Sajnos a social media platformokon manapság már nagyon nehéz elérni
            az embereket. Inkább saját tábort építünk, és küldünk üzenetet, ha
            lesz koncertünk, vagy elkészül egy új videóklip / album.
          </p>
        </div>
      </FormTextWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="firstName"
          placeholder="Keresztneved"
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail címed"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Küldés...' : 'Feliratkozás'}
        </button>
      </form>
    </FormWrapper>
  );
};

export default SubscriptionWidget;
