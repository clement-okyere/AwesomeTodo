
type ISectionTitleProp =  {
    className?: string;
    title: string;
}

const SectionTitle = ({className, title}: ISectionTitleProp) => {
    return (
      <div className={className}>
            <h2>{title}</h2>
      </div>
    )
}

export default SectionTitle;