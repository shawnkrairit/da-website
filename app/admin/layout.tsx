

type Props = {
  children: React.ReactNode;
};

function UserLayout({children}: Props) {
    return (
        <div>
            {children}
        </div>
    );
}

export default UserLayout;