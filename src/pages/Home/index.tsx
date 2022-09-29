import styles from './Home.module.scss';
import BannerSwiper from 'components/Swiper';

export default function Home() {
    return (
        <section>
            <BannerSwiper />

            <div className={styles.principal}>
                <h2 className={styles.titulo_principal}>Sobre a Barbearia</h2>

                <p>Localizada no coração da cidade a <strong className="nome-barbearia">Barbearia</strong> traz para o mercado o que há de melhor para o seu cabelo e barba.
                    Fundada em 2019, a Barbearia já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade,
                    garantindo qualidade e satisfação dos nossos clientes.</p>
            </div>

        </section>
    )
}