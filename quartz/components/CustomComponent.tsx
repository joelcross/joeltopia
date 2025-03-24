import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/custom_component.scss"
import { classNames } from "../util/lang"
import Content from "./pages/Content"

interface Options {
  htmlFilePath?: string
}

export default ((opts?: Options) => {
  const CustomComponent: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {

    return (
        <div class={classNames(displayClass, "custom-component")}>
            <h3>me in other places</h3>
            <a href="https://www.instagram.com/joel.cross">instagram</a><br/>
            <a href="https://open.spotify.com/user/joeldcross?si=2518839117994e4d">spotify</a><br/>
            <a href="https://www.fragrantica.com/member/2202604">pinterest</a><br/>
            <a href="https://www.fragrantica.com/member/2202604">fragrantica</a><br/>
            <a href="https://www.goodreads.com/user/show/136385967-joel-cross">goodreads</a><br/>
            <a href="https://letterboxd.com/joeldcross/">letterboxd</a>
        </div>
    )
  }

  CustomComponent.css = style
  return CustomComponent
}) satisfies QuartzComponentConstructor
