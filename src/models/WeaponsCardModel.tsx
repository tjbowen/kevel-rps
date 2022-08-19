export interface IWeaponCardProps {
    Name: string;
    Weakness: string;
    Strength: string;
    onClick: (name: string) => void;
    children?: React.ReactNode;
}