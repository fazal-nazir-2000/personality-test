class Api::AssesmentQuestionsController < ApplicationController
  @@assessment_questions ||= JSON.parse(File.read('db/db.json')).dig('assessment_questions')
  def index
    render json: { assessment_questions: @@assessment_questions }, status: :ok
  end
end
