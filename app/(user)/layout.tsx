type Props = {
  children: React.ReactNode;
};

function UserLayout({children}: Props) {
    return (
        <>
            {children}
        </>
    );
}

export default UserLayout;