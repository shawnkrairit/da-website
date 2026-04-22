import {NextIntlClientProvider} from 'next-intl';

type Props = {
  children: React.ReactNode;
};

function UserLayout({children}: Props) {
    return (
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
    );
}

export default UserLayout;