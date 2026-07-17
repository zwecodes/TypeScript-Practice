import { useFetch } from './useFetch';

type RandomUser = {
    results: {
        name: {
            first: string;
            last: string;
        };
        picture: {
            large: string;
        };
    }[];
};

export default function UserFetcher() {
    const { data, loading, error } = useFetch<RandomUser>("https://randomuser.me/api/");

    const user = data?.results?.[0];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            {error ? (
                <p>{error}</p>
            ) : loading || !user ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{user.name.first} {user.name.last}</p>
                    <img 
                        src={user.picture.large}
                        alt="User Profile"
                        style={{ borderRadius: '50%', width: '150px' }}
                    />
                </div>
            )}
        </div>
    );
}