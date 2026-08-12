import Link from "next/link";
import { Shell } from "./site";
export default function NotFound(){return <Shell><main><section className="page-hero"><p className="eyebrow">404</p><h1>The operation moved. This page didn't.</h1><p className="lede">The page you requested is not here, but QANRI is.</p><Link className="button" href="/">Back to QANRI</Link></section></main></Shell>}
