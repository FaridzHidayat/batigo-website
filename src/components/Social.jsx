import Image from "next/image"
import Link from "next/link"
export default function Social({source,className}){
    return (
        <ul className={className}>
          {source.map((social) => (
            <li key={social.name}>
              <Link
                aria-label={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="lg:flex mb-2"
              >
                <Image
                className="inline-block mr-2"
                src={social.icon}
                width={20}
                height={20}
                />                
                <span>{social.name}</span>
              </Link>
            </li>
          ))}
        </ul>
    )
}