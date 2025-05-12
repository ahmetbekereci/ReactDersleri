export default function Footer() {
    const simdi = new Date().getHours();
    const acilisZaman = 10;
    const kapanisZaman = 22;

    const acikMi = simdi >= acilisZaman && simdi <= kapanisZaman;
    const mesaj = acikMi ? "Açığız, Sipariş Verebilirsiniz." : "Kapalıyız, Yarın Görüşmek Üzere.";
    const stil = { color: acikMi ? "green" : "red" };

    return (
        <>
            <hr />
            <footer style={stil}>
                <p>{mesaj}</p>
            </footer>
        </>
    );
}