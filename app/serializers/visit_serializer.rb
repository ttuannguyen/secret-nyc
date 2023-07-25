class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :note
  belongs_to :secret_spot

end
