import { useState } from 'react';


export function Likes() {
    const [numberOfLikes, setNumberOfLikes] = useState(100);

    const handleLike = () => {
        setNumberOfLikes(numberOfLikes + 1);
    };

    const handleDislike = () => {
        setNumberOfLikes(numberOfLikes - 1);
    };


    return (
        <div style={{ paddingTop: 50, display: 'flex', gap: 10 }}>
            <ActionIcon
                onClick={handleLike}
                color="green"
                size="xl"
                radius="md"
                variant="light"
            >
                <IconThumbUp size={34} />
            </ActionIcon>
            <ActionIcon
                onClick={handleDislike}
                color="red"
                size="xl"
                radius="md"
                variant="light"
            >
                <IconThumbDown size={34} />
            </ActionIcon>
            <Text fz="lg">{numberOfLikes}</Text>
        </div>
    );
}
